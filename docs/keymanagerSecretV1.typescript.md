# `keymanagerSecretV1` Submodule <a name="`keymanagerSecretV1` Submodule" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymanagerSecretV1 <a name="KeymanagerSecretV1" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1 openstack_keymanager_secret_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer"></a>

```typescript
import { keymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerSecretV1.KeymanagerSecretV1(scope: Construct, id: string, config?: KeymanagerSecretV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config">KeymanagerSecretV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config">KeymanagerSecretV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putAcl">putAcl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetBitLength">resetBitLength</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetPayloadContentEncoding">resetPayloadContentEncoding</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetPayloadContentType">resetPayloadContentType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetSecretType">resetSecretType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAcl` <a name="putAcl" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putAcl"></a>

```typescript
public putAcl(value: KeymanagerSecretV1Acl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putAcl.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putTimeouts"></a>

```typescript
public putTimeouts(value: KeymanagerSecretV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a>

---

##### `resetAcl` <a name="resetAcl" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetAlgorithm` <a name="resetAlgorithm" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetBitLength` <a name="resetBitLength" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetBitLength"></a>

```typescript
public resetBitLength(): void
```

##### `resetExpiration` <a name="resetExpiration" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMode` <a name="resetMode" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPayload` <a name="resetPayload" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetPayloadContentEncoding` <a name="resetPayloadContentEncoding" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetPayloadContentEncoding"></a>

```typescript
public resetPayloadContentEncoding(): void
```

##### `resetPayloadContentType` <a name="resetPayloadContentType" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetPayloadContentType"></a>

```typescript
public resetPayloadContentType(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretType` <a name="resetSecretType" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetSecretType"></a>

```typescript
public resetSecretType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeymanagerSecretV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isConstruct"></a>

```typescript
import { keymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

keymanagerSecretV1.KeymanagerSecretV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isTerraformElement"></a>

```typescript
import { keymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

keymanagerSecretV1.KeymanagerSecretV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isTerraformResource"></a>

```typescript
import { keymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

keymanagerSecretV1.KeymanagerSecretV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport"></a>

```typescript
import { keymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeymanagerSecretV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeymanagerSecretV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeymanagerSecretV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeymanagerSecretV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference">KeymanagerSecretV1AclOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.allMetadata">allMetadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.contentTypes">contentTypes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.creatorId">creatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.secretRef">secretRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference">KeymanagerSecretV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.aclInput">aclInput</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.bitLengthInput">bitLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.expirationInput">expirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentEncodingInput">payloadContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentTypeInput">payloadContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.secretTypeInput">secretTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.bitLength">bitLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentEncoding">payloadContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentType">payloadContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acl`<sup>Required</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.acl"></a>

```typescript
public readonly acl: KeymanagerSecretV1AclOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference">KeymanagerSecretV1AclOutputReference</a>

---

##### `allMetadata`<sup>Required</sup> <a name="allMetadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.allMetadata"></a>

```typescript
public readonly allMetadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.contentTypes"></a>

```typescript
public readonly contentTypes: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `creatorId`<sup>Required</sup> <a name="creatorId" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.creatorId"></a>

```typescript
public readonly creatorId: string;
```

- *Type:* string

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.secretRef"></a>

```typescript
public readonly secretRef: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.timeouts"></a>

```typescript
public readonly timeouts: KeymanagerSecretV1TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference">KeymanagerSecretV1TimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.aclInput"></a>

```typescript
public readonly aclInput: KeymanagerSecretV1Acl;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a>

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `bitLengthInput`<sup>Optional</sup> <a name="bitLengthInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.bitLengthInput"></a>

```typescript
public readonly bitLengthInput: number;
```

- *Type:* number

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.expirationInput"></a>

```typescript
public readonly expirationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `payloadContentEncodingInput`<sup>Optional</sup> <a name="payloadContentEncodingInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentEncodingInput"></a>

```typescript
public readonly payloadContentEncodingInput: string;
```

- *Type:* string

---

##### `payloadContentTypeInput`<sup>Optional</sup> <a name="payloadContentTypeInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentTypeInput"></a>

```typescript
public readonly payloadContentTypeInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretTypeInput`<sup>Optional</sup> <a name="secretTypeInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.secretTypeInput"></a>

```typescript
public readonly secretTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeymanagerSecretV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a>

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `bitLength`<sup>Required</sup> <a name="bitLength" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.bitLength"></a>

```typescript
public readonly bitLength: number;
```

- *Type:* number

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `payloadContentEncoding`<sup>Required</sup> <a name="payloadContentEncoding" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentEncoding"></a>

```typescript
public readonly payloadContentEncoding: string;
```

- *Type:* string

---

##### `payloadContentType`<sup>Required</sup> <a name="payloadContentType" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentType"></a>

```typescript
public readonly payloadContentType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeymanagerSecretV1Acl <a name="KeymanagerSecretV1Acl" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl.Initializer"></a>

```typescript
import { keymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerSecretV1Acl: keymanagerSecretV1.KeymanagerSecretV1Acl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl.property.read">read</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a></code> | read block. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl.property.read"></a>

```typescript
public readonly read: KeymanagerSecretV1AclRead;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a>

read block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#read KeymanagerSecretV1#read}

---

### KeymanagerSecretV1AclRead <a name="KeymanagerSecretV1AclRead" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead.Initializer"></a>

```typescript
import { keymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerSecretV1AclRead: keymanagerSecretV1.KeymanagerSecretV1AclRead = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead.property.projectAccess">projectAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#project_access KeymanagerSecretV1#project_access}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead.property.users">users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#users KeymanagerSecretV1#users}. |

---

##### `projectAccess`<sup>Optional</sup> <a name="projectAccess" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead.property.projectAccess"></a>

```typescript
public readonly projectAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#project_access KeymanagerSecretV1#project_access}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#users KeymanagerSecretV1#users}.

---

### KeymanagerSecretV1Config <a name="KeymanagerSecretV1Config" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.Initializer"></a>

```typescript
import { keymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerSecretV1Config: keymanagerSecretV1.KeymanagerSecretV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a></code> | acl block. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#algorithm KeymanagerSecretV1#algorithm}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.bitLength">bitLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#bit_length KeymanagerSecretV1#bit_length}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.expiration">expiration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#expiration KeymanagerSecretV1#expiration}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#id KeymanagerSecretV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#metadata KeymanagerSecretV1#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#mode KeymanagerSecretV1#mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#name KeymanagerSecretV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.payload">payload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload KeymanagerSecretV1#payload}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.payloadContentEncoding">payloadContentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload_content_encoding KeymanagerSecretV1#payload_content_encoding}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.payloadContentType">payloadContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload_content_type KeymanagerSecretV1#payload_content_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#region KeymanagerSecretV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.secretType">secretType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#secret_type KeymanagerSecretV1#secret_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.acl"></a>

```typescript
public readonly acl: KeymanagerSecretV1Acl;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a>

acl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#acl KeymanagerSecretV1#acl}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#algorithm KeymanagerSecretV1#algorithm}.

---

##### `bitLength`<sup>Optional</sup> <a name="bitLength" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.bitLength"></a>

```typescript
public readonly bitLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#bit_length KeymanagerSecretV1#bit_length}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#expiration KeymanagerSecretV1#expiration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#id KeymanagerSecretV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#metadata KeymanagerSecretV1#metadata}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#mode KeymanagerSecretV1#mode}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#name KeymanagerSecretV1#name}.

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload KeymanagerSecretV1#payload}.

---

##### `payloadContentEncoding`<sup>Optional</sup> <a name="payloadContentEncoding" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.payloadContentEncoding"></a>

```typescript
public readonly payloadContentEncoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload_content_encoding KeymanagerSecretV1#payload_content_encoding}.

---

##### `payloadContentType`<sup>Optional</sup> <a name="payloadContentType" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.payloadContentType"></a>

```typescript
public readonly payloadContentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload_content_type KeymanagerSecretV1#payload_content_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#region KeymanagerSecretV1#region}.

---

##### `secretType`<sup>Optional</sup> <a name="secretType" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#secret_type KeymanagerSecretV1#secret_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: KeymanagerSecretV1Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#timeouts KeymanagerSecretV1#timeouts}

---

### KeymanagerSecretV1Timeouts <a name="KeymanagerSecretV1Timeouts" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.Initializer"></a>

```typescript
import { keymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerSecretV1Timeouts: keymanagerSecretV1.KeymanagerSecretV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#create KeymanagerSecretV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#delete KeymanagerSecretV1#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#update KeymanagerSecretV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#create KeymanagerSecretV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#delete KeymanagerSecretV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#update KeymanagerSecretV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeymanagerSecretV1AclOutputReference <a name="KeymanagerSecretV1AclOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.Initializer"></a>

```typescript
import { keymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerSecretV1.KeymanagerSecretV1AclOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.putRead">putRead</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRead` <a name="putRead" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.putRead"></a>

```typescript
public putRead(value: KeymanagerSecretV1AclRead): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.putRead.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a>

---

##### `resetRead` <a name="resetRead" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.read">read</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference">KeymanagerSecretV1AclReadOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.readInput">readInput</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.read"></a>

```typescript
public readonly read: KeymanagerSecretV1AclReadOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference">KeymanagerSecretV1AclReadOutputReference</a>

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.readInput"></a>

```typescript
public readonly readInput: KeymanagerSecretV1AclRead;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeymanagerSecretV1Acl;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a>

---


### KeymanagerSecretV1AclReadOutputReference <a name="KeymanagerSecretV1AclReadOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.Initializer"></a>

```typescript
import { keymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resetProjectAccess">resetProjectAccess</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectAccess` <a name="resetProjectAccess" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resetProjectAccess"></a>

```typescript
public resetProjectAccess(): void
```

##### `resetUsers` <a name="resetUsers" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resetUsers"></a>

```typescript
public resetUsers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.projectAccessInput">projectAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.projectAccess">projectAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `projectAccessInput`<sup>Optional</sup> <a name="projectAccessInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.projectAccessInput"></a>

```typescript
public readonly projectAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `projectAccess`<sup>Required</sup> <a name="projectAccess" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.projectAccess"></a>

```typescript
public readonly projectAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `users`<sup>Required</sup> <a name="users" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeymanagerSecretV1AclRead;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a>

---


### KeymanagerSecretV1TimeoutsOutputReference <a name="KeymanagerSecretV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { keymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeymanagerSecretV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a>

---



