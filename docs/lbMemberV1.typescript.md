# `lbMemberV1` Submodule <a name="`lbMemberV1` Submodule" id="@ithings/cdktf-provider-openstack.lbMemberV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbMemberV1 <a name="LbMemberV1" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1 openstack_lb_member_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.Initializer"></a>

```typescript
import { lbMemberV1 } from '@ithings/cdktf-provider-openstack'

new lbMemberV1.LbMemberV1(scope: Construct, id: string, config: LbMemberV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config">LbMemberV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config">LbMemberV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.putTimeouts"></a>

```typescript
public putTimeouts(value: LbMemberV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts">LbMemberV1Timeouts</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeight` <a name="resetWeight" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.resetWeight"></a>

```typescript
public resetWeight(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbMemberV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.isConstruct"></a>

```typescript
import { lbMemberV1 } from '@ithings/cdktf-provider-openstack'

lbMemberV1.LbMemberV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.isTerraformElement"></a>

```typescript
import { lbMemberV1 } from '@ithings/cdktf-provider-openstack'

lbMemberV1.LbMemberV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.isTerraformResource"></a>

```typescript
import { lbMemberV1 } from '@ithings/cdktf-provider-openstack'

lbMemberV1.LbMemberV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.generateConfigForImport"></a>

```typescript
import { lbMemberV1 } from '@ithings/cdktf-provider-openstack'

lbMemberV1.LbMemberV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LbMemberV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbMemberV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbMemberV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbMemberV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference">LbMemberV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.adminStateUpInput">adminStateUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.poolIdInput">poolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts">LbMemberV1Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.weight">weight</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.timeouts"></a>

```typescript
public readonly timeouts: LbMemberV1TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference">LbMemberV1TimeoutsOutputReference</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.poolIdInput"></a>

```typescript
public readonly poolIdInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LbMemberV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts">LbMemberV1Timeouts</a>

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `address`<sup>Required</sup> <a name="address" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbMemberV1Config <a name="LbMemberV1Config" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.Initializer"></a>

```typescript
import { lbMemberV1 } from '@ithings/cdktf-provider-openstack'

const lbMemberV1Config: lbMemberV1.LbMemberV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#address LbMemberV1#address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.poolId">poolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#pool_id LbMemberV1#pool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#port LbMemberV1#port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#admin_state_up LbMemberV1#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#id LbMemberV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#region LbMemberV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#tenant_id LbMemberV1#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts">LbMemberV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#weight LbMemberV1#weight}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `address`<sup>Required</sup> <a name="address" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#address LbMemberV1#address}.

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#pool_id LbMemberV1#pool_id}.

---

##### `port`<sup>Required</sup> <a name="port" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#port LbMemberV1#port}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#admin_state_up LbMemberV1#admin_state_up}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#id LbMemberV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#region LbMemberV1#region}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#tenant_id LbMemberV1#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: LbMemberV1Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts">LbMemberV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#timeouts LbMemberV1#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Config.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#weight LbMemberV1#weight}.

---

### LbMemberV1Timeouts <a name="LbMemberV1Timeouts" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts.Initializer"></a>

```typescript
import { lbMemberV1 } from '@ithings/cdktf-provider-openstack'

const lbMemberV1Timeouts: lbMemberV1.LbMemberV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#create LbMemberV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#delete LbMemberV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#create LbMemberV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_member_v1#delete LbMemberV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbMemberV1TimeoutsOutputReference <a name="LbMemberV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { lbMemberV1 } from '@ithings/cdktf-provider-openstack'

new lbMemberV1.LbMemberV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts">LbMemberV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbMemberV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.lbMemberV1.LbMemberV1Timeouts">LbMemberV1Timeouts</a>

---



