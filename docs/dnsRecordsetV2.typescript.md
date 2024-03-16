# `dnsRecordsetV2` Submodule <a name="`dnsRecordsetV2` Submodule" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsRecordsetV2 <a name="DnsRecordsetV2" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2 openstack_dns_recordset_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.Initializer"></a>

```typescript
import { dnsRecordsetV2 } from '@ithings/cdktf-provider-openstack'

new dnsRecordsetV2.DnsRecordsetV2(scope: Construct, id: string, config: DnsRecordsetV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config">DnsRecordsetV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config">DnsRecordsetV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetDisableStatusCheck">resetDisableStatusCheck</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.putTimeouts"></a>

```typescript
public putTimeouts(value: DnsRecordsetV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts">DnsRecordsetV2Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableStatusCheck` <a name="resetDisableStatusCheck" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetDisableStatusCheck"></a>

```typescript
public resetDisableStatusCheck(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTtl` <a name="resetTtl" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetType` <a name="resetType" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.resetValueSpecs"></a>

```typescript
public resetValueSpecs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsRecordsetV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.isConstruct"></a>

```typescript
import { dnsRecordsetV2 } from '@ithings/cdktf-provider-openstack'

dnsRecordsetV2.DnsRecordsetV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.isTerraformElement"></a>

```typescript
import { dnsRecordsetV2 } from '@ithings/cdktf-provider-openstack'

dnsRecordsetV2.DnsRecordsetV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.isTerraformResource"></a>

```typescript
import { dnsRecordsetV2 } from '@ithings/cdktf-provider-openstack'

dnsRecordsetV2.DnsRecordsetV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.generateConfigForImport"></a>

```typescript
import { dnsRecordsetV2 } from '@ithings/cdktf-provider-openstack'

dnsRecordsetV2.DnsRecordsetV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DnsRecordsetV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsRecordsetV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsRecordsetV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsRecordsetV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference">DnsRecordsetV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.disableStatusCheckInput">disableStatusCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.recordsInput">recordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts">DnsRecordsetV2Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.valueSpecsInput">valueSpecsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.disableStatusCheck">disableStatusCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.records">records</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.timeouts"></a>

```typescript
public readonly timeouts: DnsRecordsetV2TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference">DnsRecordsetV2TimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableStatusCheckInput`<sup>Optional</sup> <a name="disableStatusCheckInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.disableStatusCheckInput"></a>

```typescript
public readonly disableStatusCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `recordsInput`<sup>Optional</sup> <a name="recordsInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.recordsInput"></a>

```typescript
public readonly recordsInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DnsRecordsetV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts">DnsRecordsetV2Timeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.valueSpecsInput"></a>

```typescript
public readonly valueSpecsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableStatusCheck`<sup>Required</sup> <a name="disableStatusCheck" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.disableStatusCheck"></a>

```typescript
public readonly disableStatusCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `records`<sup>Required</sup> <a name="records" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.records"></a>

```typescript
public readonly records: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsRecordsetV2Config <a name="DnsRecordsetV2Config" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.Initializer"></a>

```typescript
import { dnsRecordsetV2 } from '@ithings/cdktf-provider-openstack'

const dnsRecordsetV2Config: dnsRecordsetV2.DnsRecordsetV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#name DnsRecordsetV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.records">records</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#records DnsRecordsetV2#records}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#zone_id DnsRecordsetV2#zone_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#description DnsRecordsetV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.disableStatusCheck">disableStatusCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#disable_status_check DnsRecordsetV2#disable_status_check}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#id DnsRecordsetV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#project_id DnsRecordsetV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#region DnsRecordsetV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts">DnsRecordsetV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.ttl">ttl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#ttl DnsRecordsetV2#ttl}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#type DnsRecordsetV2#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#value_specs DnsRecordsetV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#name DnsRecordsetV2#name}.

---

##### `records`<sup>Required</sup> <a name="records" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.records"></a>

```typescript
public readonly records: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#records DnsRecordsetV2#records}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#zone_id DnsRecordsetV2#zone_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#description DnsRecordsetV2#description}.

---

##### `disableStatusCheck`<sup>Optional</sup> <a name="disableStatusCheck" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.disableStatusCheck"></a>

```typescript
public readonly disableStatusCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#disable_status_check DnsRecordsetV2#disable_status_check}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#id DnsRecordsetV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#project_id DnsRecordsetV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#region DnsRecordsetV2#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: DnsRecordsetV2Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts">DnsRecordsetV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#timeouts DnsRecordsetV2#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#ttl DnsRecordsetV2#ttl}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#type DnsRecordsetV2#type}.

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Config.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#value_specs DnsRecordsetV2#value_specs}.

---

### DnsRecordsetV2Timeouts <a name="DnsRecordsetV2Timeouts" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts.Initializer"></a>

```typescript
import { dnsRecordsetV2 } from '@ithings/cdktf-provider-openstack'

const dnsRecordsetV2Timeouts: dnsRecordsetV2.DnsRecordsetV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#create DnsRecordsetV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#delete DnsRecordsetV2#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#update DnsRecordsetV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#create DnsRecordsetV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#delete DnsRecordsetV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/dns_recordset_v2#update DnsRecordsetV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsRecordsetV2TimeoutsOutputReference <a name="DnsRecordsetV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { dnsRecordsetV2 } from '@ithings/cdktf-provider-openstack'

new dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts">DnsRecordsetV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsRecordsetV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dnsRecordsetV2.DnsRecordsetV2Timeouts">DnsRecordsetV2Timeouts</a>

---



