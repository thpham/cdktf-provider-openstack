# `lbMonitorV1` Submodule <a name="`lbMonitorV1` Submodule" id="@ithings/cdktf-provider-openstack.lbMonitorV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbMonitorV1 <a name="LbMonitorV1" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1 openstack_lb_monitor_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.Initializer"></a>

```typescript
import { lbMonitorV1 } from '@ithings/cdktf-provider-openstack'

new lbMonitorV1.LbMonitorV1(scope: Construct, id: string, config: LbMonitorV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config">LbMonitorV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config">LbMonitorV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetExpectedCodes">resetExpectedCodes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetUrlPath">resetUrlPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.putTimeouts"></a>

```typescript
public putTimeouts(value: LbMonitorV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts">LbMonitorV1Timeouts</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetExpectedCodes` <a name="resetExpectedCodes" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetExpectedCodes"></a>

```typescript
public resetExpectedCodes(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUrlPath` <a name="resetUrlPath" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.resetUrlPath"></a>

```typescript
public resetUrlPath(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbMonitorV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.isConstruct"></a>

```typescript
import { lbMonitorV1 } from '@ithings/cdktf-provider-openstack'

lbMonitorV1.LbMonitorV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.isTerraformElement"></a>

```typescript
import { lbMonitorV1 } from '@ithings/cdktf-provider-openstack'

lbMonitorV1.LbMonitorV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.isTerraformResource"></a>

```typescript
import { lbMonitorV1 } from '@ithings/cdktf-provider-openstack'

lbMonitorV1.LbMonitorV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.generateConfigForImport"></a>

```typescript
import { lbMonitorV1 } from '@ithings/cdktf-provider-openstack'

lbMonitorV1.LbMonitorV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LbMonitorV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbMonitorV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbMonitorV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbMonitorV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference">LbMonitorV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.adminStateUpInput">adminStateUpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.delayInput">delayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.expectedCodesInput">expectedCodesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts">LbMonitorV1Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.urlPathInput">urlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.adminStateUp">adminStateUp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.delay">delay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.expectedCodes">expectedCodes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.urlPath">urlPath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.timeouts"></a>

```typescript
public readonly timeouts: LbMonitorV1TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference">LbMonitorV1TimeoutsOutputReference</a>

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: string;
```

- *Type:* string

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.delayInput"></a>

```typescript
public readonly delayInput: number;
```

- *Type:* number

---

##### `expectedCodesInput`<sup>Optional</sup> <a name="expectedCodesInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.expectedCodesInput"></a>

```typescript
public readonly expectedCodesInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LbMonitorV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts">LbMonitorV1Timeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.urlPathInput"></a>

```typescript
public readonly urlPathInput: string;
```

- *Type:* string

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: string;
```

- *Type:* string

---

##### `delay`<sup>Required</sup> <a name="delay" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

---

##### `expectedCodes`<sup>Required</sup> <a name="expectedCodes" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.expectedCodes"></a>

```typescript
public readonly expectedCodes: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbMonitorV1Config <a name="LbMonitorV1Config" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.Initializer"></a>

```typescript
import { lbMonitorV1 } from '@ithings/cdktf-provider-openstack'

const lbMonitorV1Config: lbMonitorV1.LbMonitorV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.delay">delay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#delay LbMonitorV1#delay}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.maxRetries">maxRetries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#max_retries LbMonitorV1#max_retries}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#timeout LbMonitorV1#timeout}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#type LbMonitorV1#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.adminStateUp">adminStateUp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#admin_state_up LbMonitorV1#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.expectedCodes">expectedCodes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#expected_codes LbMonitorV1#expected_codes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.httpMethod">httpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#http_method LbMonitorV1#http_method}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#id LbMonitorV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#region LbMonitorV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#tenant_id LbMonitorV1#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts">LbMonitorV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.urlPath">urlPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#url_path LbMonitorV1#url_path}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `delay`<sup>Required</sup> <a name="delay" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#delay LbMonitorV1#delay}.

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#max_retries LbMonitorV1#max_retries}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#timeout LbMonitorV1#timeout}.

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#type LbMonitorV1#type}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#admin_state_up LbMonitorV1#admin_state_up}.

---

##### `expectedCodes`<sup>Optional</sup> <a name="expectedCodes" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.expectedCodes"></a>

```typescript
public readonly expectedCodes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#expected_codes LbMonitorV1#expected_codes}.

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#http_method LbMonitorV1#http_method}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#id LbMonitorV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#region LbMonitorV1#region}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#tenant_id LbMonitorV1#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: LbMonitorV1Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts">LbMonitorV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#timeouts LbMonitorV1#timeouts}

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Config.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#url_path LbMonitorV1#url_path}.

---

### LbMonitorV1Timeouts <a name="LbMonitorV1Timeouts" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts.Initializer"></a>

```typescript
import { lbMonitorV1 } from '@ithings/cdktf-provider-openstack'

const lbMonitorV1Timeouts: lbMonitorV1.LbMonitorV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#create LbMonitorV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#delete LbMonitorV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#create LbMonitorV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_monitor_v1#delete LbMonitorV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbMonitorV1TimeoutsOutputReference <a name="LbMonitorV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { lbMonitorV1 } from '@ithings/cdktf-provider-openstack'

new lbMonitorV1.LbMonitorV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts">LbMonitorV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbMonitorV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.lbMonitorV1.LbMonitorV1Timeouts">LbMonitorV1Timeouts</a>

---



